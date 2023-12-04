type GenericRes<T> = {
    status: Status;
    data: T;
};
export type Status = {
    responseDescription: string;
    responseCode: string;
};
export default GenericRes;
