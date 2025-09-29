import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Fpass from "@/assets/images/Fpass.png";

import { useNavigate } from "react-router-dom";

export default function ForgetPass() {
  const Values = {
    email: "",
  };

  const validationEmail = Yup.object({
    email: Yup.string()
      .email("email is not correct")
      .required("email required"),
  });
  const navigate = useNavigate();

  const onSubmit = (_values: { email: string }) => {
    navigate("/otp");
  };

  return (
    <div className="flex items-center justify-start ">
      <div className="w-170 pl-30 mb-10">
        <div className="my-15 space-y-3">
          <h1 className="text-3xl font-semibold">Forgot Password</h1>
          <p className="text-sm text-gray-400">Recover your account password</p>
        </div>
        <Formik
          initialValues={Values}
          validationSchema={validationEmail}
          onSubmit={onSubmit}
        >
          <Form className="space-y-10">
            <div>
              <label className="block mb-2 text-lg font-semibold text-blue-700">
                E-mail
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-100 border rounded-2xl px-3 bg-[#fbfbfb] py-3 mb-2 outline-none focus:ring-1 ring-gray-400 "
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm "
              />
            </div>

            <button
              type="submit"
              className="block w-60 text-center bg-[#5BAE61] text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Continue
            </button>
          </Form>
        </Formik>
      </div>

      <img src={Fpass} alt="Fpass" className="w-160" />
    </div>
  );
}
