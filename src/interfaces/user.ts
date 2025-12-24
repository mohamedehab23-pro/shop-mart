
export interface UserI {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

export type UsersAPIResponse = {
  totalUsers: number;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage: number | null;
  };
  users: UserI[];
};
