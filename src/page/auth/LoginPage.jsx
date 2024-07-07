import { LoadingButton } from "@mui/lab";
import { Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { loginService } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    loginService(data)
      .then((res) => {
        res && navigate("/");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="p-5 w-100 h-screen flex justify-center items-center bg-gray-800 flex-col gap-4">
      <Typography color={"#E15457"} fontSize={40} fontFamily={"fantasy"}>
        Airbnb
      </Typography>
      <Paper
        className="flex flex-col gap-3 w-full md:w-[400px] p-5"
        component={"form"}
        onSubmit={handleLogin}
      >
        <Typography textAlign={"center"} fontSize={20}>
          Admin Login Page
        </Typography>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={data.email}
          required
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={data.password}
          required
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <LoadingButton type="submit" loading={isLoading} variant="outlined">
          Login
        </LoadingButton>
      </Paper>
    </div>
  );
};

export default LoginPage;
