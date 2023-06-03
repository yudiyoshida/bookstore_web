interface AccountDto {
  id: string;
  role: string;
  type: string;
  name: string;
  imageUrl: string;
}

export interface LoginReqBody {
  credential: string;
  password: string;
}

export interface LoginResBody {
  account: AccountDto
  token: string
}
