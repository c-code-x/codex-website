// Importing dependencies
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import Joi, { defaults } from 'joi';
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()



// Joi postValidation
const postValidation = Joi.object({
  fname: Joi.string().required().messages({
    'string.base': 'First name must be a string',
    'string.empty': 'First name cannot be empty',
    'any.required': 'First name is required'
  }),
  lname: Joi.string().required().messages({
    'string.base': 'Last name must be a string',
    'string.empty': 'Last name cannot be empty',
    'any.required': 'Last name is required'
  }),
  password: Joi.string().required().min(8).messages({
    'string.min': 'Password must be at least 8 characters long',
    'any.required': 'Password is required'
  }),
  email: Joi.string().required().email().regex(/^\w+([\.-]?\w+)*@(gitam\.in|gitam\.edu)$/).messages({
    'any.required': 'Email is required',
    'string.pattern.base': 'Email domain must be of GITAM',
  }),
  number: Joi.number().required().messages({
    'number.min': 'Number must be 10 characters long',
    'any.required': 'Number is required',
  }),
  rednumber: Joi.string().required().messages({
    'any.required': 'Redgistration number is required'
  }),
  branch: Joi.string().required().messages({
    'string.base': 'Branch must be a string',
    'any.required': 'Branch is required'
  }),
});

// Joi getValidation
const getValidation = Joi.object({
  email: Joi.string().required().email().regex(/^\w+([\.-]?\w+)*@(gitam\.in|gitam\.edu)$/).messages({
    'any.required': 'Email is required',
    'string.pattern.base': 'Email domain must be of GITAM',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required'
  }),
})


// Function
export default async function User( req: NextApiRequest, res: NextApiResponse) 
{
  // Variables
  const {fname, lname, number, rednumber, branch} = req.body
  const prisma = new PrismaClient();

  // @POST METHOD
  if (req.method === 'POST')
  {
    //Validation
    const { fname, lname, password, email, number, rednumber, branch, token, error } = await postValidation.validateAsync(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }


    //Database integration
    try {
      //Connecting to db
      await prisma.$connect()

      //Finding existing user
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });
  
      //Checking if user exists
      if (existingUser) {
        res.status(409).json({ error: "User already exists" });
        return;
      }

      //Hashing password
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(req.body.password, salt)

      //Creating user
      const createUser = await prisma.user.create({
        data: {
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          password: hashPassword,
          number: req.body.number,
          rednumber: req.body.rednumber,
          branch: req.body.branch,
          token: jwt.sign({ userId: User}, process.env.JWT_SECRET!),
        }
      }) 

      //Disconnecting from db
      await prisma.$disconnect()

    }
    catch(error)
    {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
      return
    }
  
    //Hashing password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    // json response
    res.status(201).json({
      fname: fname,
      lname: lname,
      email: email,
      password: hashPassword,
      number: number,
      rednumber: rednumber,
      branch: branch,
      token: token,
    })
  }


  // @GET METHOD
  else if(req.method === 'GET'){

    //Validation
    const {  email, password, error } = await getValidation.validateAsync(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    //Database integration
    try {
      //Connecting to db
      await prisma.$connect()

      //Finding if user exists
      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });
  
      //Error if user does not exists
      if (!existingUser) {
        res.status(401).json({ error: 'User not found' });
        return
      }

      //Variable
      const passwordMatch = await bcrypt.compare(password, existingUser.password);
  
      //Error if password is incorrect
      if (!passwordMatch) {
        res.status(401).json({ message: 'Invalid password' });
        return;
      }

      //Response
      res.status(200).json({
        fname: existingUser.fname,
        lanme: existingUser.lname,
        email: existingUser.email,
        password: existingUser.password,
        number: existingUser.number,
        rednumber: existingUser.rednumber,
        branch: existingUser.branch,
        token: existingUser.token,
      })

      //Disconnecting from db
      await prisma.$disconnect()  
      
    }
    catch (error) 
    {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
      return 
    }
  } 
  // Method not valid
  else
  {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }   

}


//Generate JWT
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
      expiresIn: '30d',
  })
}