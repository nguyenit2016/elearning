import * as actionType from './../constants/actionType'
import Axios from "axios";

export const actLoginAdmin = (user, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user
    }).then((res) => {
      dispatch(actGetUser(res.data));
      history.push("/admin/dashboard");
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const actGetUser = user => {
  return {
    type: actionType.GET_USER_ADMIN,
    data: user
  };
};