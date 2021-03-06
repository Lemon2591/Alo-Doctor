import "./FormLogin.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function FormLogin() {
  // const history = useHistory();

  const [chekcLogin, setCheckLogin] = useState(false);
  const [checkRoleLogin, setCheckRoleLogin] = useState(1);

  const selectRoleLogin = (index) => {
    setCheckRoleLogin(index);
  };

  useEffect(() => {}, [chekcLogin]);

  const [value, setValue] = useState({
    userName: "",

    password: "",
  });

  const [isCheckedForm, setIsCheckedForm] = useState(false);

  const handleChange = (event) => {
    localStorage.setItem("nameUser", value.userName);
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmitBN = (event) => {
    setValue({
      userName: "",

      password: "",
    });

    const requestOptions = {
      method: "GET",
    };
    fetch("http://localhost:8000/patientAccount")
      .then((response) => response.json())
      .then((data) => {
        if (data.length == 0) {
          setCheckLogin(true);
          setValue({
            userName: "",

            password: "",
          });
        } else {
          let loginOk = false;
          for (let i = 0; i < data.length; i++) {
            if (
              value.password === data[i].password &&
              value.userName === data[i].userName
            ) {
              function makeid(length) {
                var text = "";
                var possible =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < length; i++)
                  text += possible.charAt(
                    Math.floor(Math.random() * possible.length)
                  );

                return text;
              }
              loginOk = true;
              localStorage.setItem("token", makeid(100));
              window.location.href = "./HomeUser";
              localStorage.setItem("id", data[i].id);
            }
          }
          if (!loginOk) {
            setCheckLogin(true);
            setValue({
              userName: "",
              password: "",
            });
          }
        }
      });

    event.preventDefault();
  };

  const handleFormSubmitBS = (event) => {
    setValue({
      userName: "",

      password: "",
    });

    const requestOptions = {
      method: "GET",
    };
    fetch(`http://localhost:8000/doctorAccount`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length == 0) {
          setCheckLogin(true);
          setValue({
            userName: "",

            password: "",
          });
        } else {
          if (
            value.password === data[0].password &&
            value.userName === data[0].userName
          ) {
            function makeid(length) {
              var text = "";
              var possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

              for (var i = 0; i < length; i++)
                text += possible.charAt(
                  Math.floor(Math.random() * possible.length)
                );

              return text;
            }
            localStorage.setItem("token", makeid(100));
            window.location.href = "./HomeDoctor";
          } else {
            setCheckLogin(true);
            setValue({
              userName: "",

              password: "",
            });
          }
        }
      });

    event.preventDefault();
  };

  const CheckRegisterBlank = (event) => {
    if (event.target.checked) {
      setIsCheckedForm(true);
    } else {
      setIsCheckedForm(false);
    }
  };

  return (
    <div>
      <div className="Login-Content">
        <p>QUY ?????NH</p>
        <div className="tab-content">
          <div className="rules-content rules-content-login">
            <div className="rules-form-crol">
              <div className="">
                <div className="card example-1 example-1-format scrollbar-deep-purple bordered-deep-purple thin">
                  <div className="card-body">
                    <p>Vui l??ng ?????c v?? ?????ng ?? tr?????c khi ti???p t???c:</p>
                    <ul>
                      <li>
                        Th???i gian ????ng k?? kh??m b???nh trong v??ng 30 ng??y ?????n 16h30
                        tr?????c ng??y kh??m.
                      </li>

                      <li>
                        Qu?? kh??ch c?? th??? ????ng k?? kh??m 01 ho???c nhi???u chuy??n khoa.
                      </li>
                      <li>
                        Ph?? ????ng k?? kh??m tr???c tuy???n bao g???m
                        <ul>
                          <li>Ti???n kh??m 01 (ho???c nhi???u) chuy??n khoa.</li>
                          <li>
                            Ph?? ti???n ??ch: ph?? s??? d???ng d???ch v??? ????ng k?? kh??m b???nh
                            tr???c tuy???n, bao g???m ph?? tin nh???n th??ng b??o l???ch h???n,
                            th??ng b??o giao d???ch tr??n t??i kho???n th???, h???y kh??m,
                            nh???c t??i kh??m...(ch??? tr??? 01 l???n ph?? ti???n ??ch cho 01
                            l?????t ????ng k?? kh??m nhi???u chuy??n khoa).
                          </li>
                        </ul>
                      </li>

                      <li>
                        Ph????ng th???c thanh to??n: Ph?? kh??m b???nh ???????c tr??? v??o t??i
                        kho???n th???:
                        <ul>
                          <li>
                            Th??? kh??m b???nh c???a B???nh vi???n ?????i h???c Y D?????c TPHCM:
                            Ng?????i b???nh ????ng k?? ch???c n??ng thanh to??n tr???c tuy???n
                            t???i B???nh vi???n ho???c c??c chi nh??nh Vietinbank tr?????c
                            khi s??? d???ng.
                          </li>
                          <li>
                            C??c lo???i th??? ATM n???i ?????a (??a?? ki??ch hoa??t thanh toa??n
                            tr????c tuy????n).
                          </li>

                          <li>
                            C??c th??? thanh to??n qu???c t??? (Visa/MasterCard???).
                          </li>
                        </ul>
                      </li>

                      <li>
                        Phi???u kh??m b???nh ???????c g???i ?????n Qu?? kh??ch qua email v?? tin
                        nh???n SMS ngay sau khi ????ng k?? kh??m b???nh th??nh c??ng.
                      </li>

                      <li>
                        ?????n ng??y kh??m, Ng?????i b???nh c?? m???t tr?????c trong v??ng 15-30
                        ph??t:
                        <ul>
                          <li>
                            Ng?????i b???nh ????? ??i???u ki???n h?????ng BHYT t???i B???nh vi???n:
                            ?????n qu???y ????ng k?? kh??m b???nh 12,13,14 t???ng tr???t khu A
                            x??c nh???n BHYT.
                          </li>
                          <li>
                            Ng?????i b???nh kh??ng BHYT: ?????n th???ng ph??ng kh??m chuy??n
                            khoa theo l???ch h???n.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Tr?????ng h???p h???y ho???c ?????i kh??m:
                        <ul>
                          <li>Ch??? th???c hi???n ?????n 16h30 tr?????c ng??y kh??m.</li>

                          <li>
                            Qu?? kh??ch th???c hi???n vi???c h???y phi???u, ho???c h???y phi???u
                            v?? ?????t l???ch kh??m m???i tr??n App/Website.
                          </li>

                          <li>
                            Ti???n kh??m b???nh s??? chuy???n l???i t??i kho???n th??? ???? s???
                            d???ng thanh to??n.
                          </li>

                          <li>Ph?? ti???n ??ch s??? kh??ng ???????c ho??n tr???.</li>

                          <li>
                            Th???i gian nh???n l???i ti???n kh??m (Theo quy ?????nh c???a ng??n
                            h??ng):
                            <ul>
                              <li>
                                C??c lo???i th??? ATM n???i ?????a: t??? 01 ?????n 05 ng??y l??m
                                vi???c.
                              </li>

                              <li>
                                Th??? thanh to??n qu???c t??? (Visa/MasterCard???): t??? 05
                                ?????n 45 ng??y l??m vi???c.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane fade show active login-form-format bg-format"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <div className="router-author">
              <div
                className={
                  checkRoleLogin === 1
                    ? "router-bn active-router-author"
                    : "router-bn"
                }
                onClick={() => selectRoleLogin(1)}
              >
                B???nh nh??n
              </div>

              <div
                className={
                  checkRoleLogin === 2
                    ? "router-bs active-router-author"
                    : "router-bs"
                }
                onClick={() => selectRoleLogin(2)}
              >
                B??c s??
              </div>
            </div>

            <form
              className={
                checkRoleLogin === 1 ? "login-bn login-active" : "login-bn"
              }
              onSubmit={handleFormSubmitBN}
            >
              {/* <h5 className="text-uppercase text-center mb-5">Login</h5> */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="userName">
                  T??n t??i kho???n
                </label>
                <input
                  type="text"
                  id="loginNameBN"
                  className="form-control"
                  name="userName"
                  required
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  M???t kh???u
                </label>
                <input
                  type="password"
                  id="loginPasswordBN"
                  className="form-control"
                  name="password"
                  required
                  onChange={handleChange}
                  placeholder="Password"
                />
                {chekcLogin ? (
                  <label className="form-label" style={{ color: "red" }}>
                    Th??ng tin t??i kho???n ho???c m???t kh???u kh??ng chinh x??c !
                  </label>
                ) : null}
              </div>
              <div className="login-btn">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  ????ng Nh???p
                </button>
              </div>
              <div className="text-center">
                <p>
                  B???n ch??a c?? t??i kho???n
                  <NavLink to="../Register">????ng k?? ngay ?</NavLink>
                </p>
              </div>
            </form>

            <form
              className={
                checkRoleLogin === 2 ? "login-bs login-active" : "login-bs"
              }
              onSubmit={handleFormSubmitBS}
            >
              {/* <h5 className="text-uppercase text-center mb-5">Login</h5> */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="userName">
                  T??n t??i kho???n
                </label>
                <input
                  type="text"
                  id="loginNameBS"
                  className="form-control"
                  name="userName"
                  required
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  M???t kh???u
                </label>
                <input
                  type="password"
                  id="loginPasswordBS"
                  className="form-control"
                  name="password"
                  required
                  onChange={handleChange}
                  placeholder="Password"
                />
                {chekcLogin ? (
                  <label className="form-label" style={{ color: "red" }}>
                    Th??ng tin t??i kho???n ho???c m???t kh???u kh??ng chinh x??c !
                  </label>
                ) : null}
              </div>
              <div className="login-btn">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  ????ng Nh???p
                </button>
              </div>
              <div className="text-center">
                <p>
                  B???n ch??a c?? t??i kho???n
                  <NavLink to="../Register">????ng k?? ngay ?</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
