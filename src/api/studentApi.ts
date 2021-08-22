import axiosClient from "./axiosClient";
import { ListParams, ListResponse, Student } from '../model';

const studentApi = {
    getAll: (params: ListParams): Promise<ListResponse<Student>> => {
        const url = '/students';
        return axiosClient.get(url, { params });
    },

    getById: (id: string): Promise<Student> => {
        const url = `/students/${id}`;
        return axiosClient.get(url);
    },

    add: (data: Student): Promise<Student> => {
        const url = '/students';
        return axiosClient.post(url, { data });
    },

    update: (id: string, data: Student): Promise<Student> => {
        const url = `/students/${id}`;
        return axiosClient.patch(url, { data });
    },

    delete: (id: string): Promise<ListResponse<Student>> => {
        const url = `/students/${id}`;
        return axiosClient.delete(url);
    },
}

export default studentApi;