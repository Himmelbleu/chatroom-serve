declare interface IGroup {
  id: number;
  name: string;
  avatar: string;
  desc: string;
  created_date?: Date;
  room_id?: string;
}

declare interface IUser {
  id?: number;
  is_online?: number;
  socket_id?: string;
  username?: string;
  password?: string;
  phone?: string;
  create_date?: Date;
  birthday?: Date;
  bg_img?: string;
  avatar?: string;
  thumb?: number;
  signature?: string;
  zodiac?: string;
  constellation?: string;
  sex?: string;
}

declare interface NormalizeResponse {
  status?: number;
  data?: any;
}

declare interface NormalizeCodes {
  well?: number;
  bad?: number;
}
