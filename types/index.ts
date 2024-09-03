export interface TokenCache {
  getToken: (key: string) => Promise<string | undefined | null>;
  saveToken: (key: string, token: string) => Promise<void>;
  clearToken?: (key: string) => void;
}

export interface ISlider {
  name: string;
  imageUrl: string;
}

export interface IPet {
  age: string;
  breed: string;
  category: string;
  imageUrl: string;
  name: string;
}
