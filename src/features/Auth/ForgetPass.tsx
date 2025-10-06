import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Fpass from "@/assets/images/Fpass.png";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ForgetPass() {
  const Values = {
    email: "",
  };

  const validationEmail = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email required"),
  });
  const navigate = useNavigate();

  const onSubmit = (_values: { email: string }) => {
    navigate("/otp");
  };

  return (
    <div className="grid grid-cols-2 gap-6 px-2 mb-30 mt-10">
      <div className="col-span-2 md:col-span-1">
        <div className="my-8 space-y-3">
          <h1 className="text-3xl font-semibold">Forgot Password</h1>
          <p className="text-gray-40 text-base font-medium">
            Recover your account password
          </p>
        </div>
        <Formik
          initialValues={Values}
          validationSchema={validationEmail}
          onSubmit={onSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label className="block mb-2 text-lg font-semibold">E-mail</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-3 bg-[#fbfbfb] py-3 mb-2 outline-none focus:ring-1 ring-gray-400 "
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm "
              />
            </div>

            <Button
              type="submit"
              className="bg-green text-white text-sm font-medium py-3 px-6 w-full sm:w-fit"
            >
              Continue
            </Button>
          </Form>
        </Formik>
      </div>

      <img
        src={Fpass}
        alt="Fpass"
        className="col-span-1 rounded-xl hidden md:block h-full w-full object-cover"
      />
    </div>
  );
}
