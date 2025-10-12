import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginstimg from "@/assets/images/login_st.png";
import facebookIcon from "@/assets/icons/facebook.svg";
import googleIcon from "@/assets/icons/google.svg";
import microsoftIcon from "@/assets/icons/microsoft.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useObserver } from "@/hooks/useObserver";

export default function Login() {
  const Values = {
    email: "",
    password: "",
  };

  const socialButtons = [
    { src: facebookIcon, label: "Facebook", href: "#" },
    { src: googleIcon, label: "Google", href: "#" },
    { src: microsoftIcon, label: "Microsoft", href: "#" },
  ];

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password required"),
  });

  const onSubmit = (values: { email: string; password: string }) => {
    console.log("Form data:", values);
    alert(`Hello ${values.email}`);
  };

  // Basic animation
  const formAnim = useObserver("slide-left");
  const imgAnim = useObserver("slide-right");

  return (
    <div className="grid grid-cols-2 gap-6 px-2 mb-30 mt-10">
      <div
        ref={formAnim.ref}
        className={`animate-hidden ${formAnim.animation} ${
          formAnim.isVisible ? "show" : ""
        } col-span-2 md:col-span-1`}
      >
        <h1 className="text-3xl font-semibold mb-10">
          Sign in to your account
        </h1>
        <Formik
          initialValues={Values}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label className="block mb-2">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-3 py-2 mb-2 outline-none focus:ring-1 ring-gray-400 "
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm "
              />
            </div>

            <div>
              <label className="block mb-2">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg px-3 py-2 mb-2 outline-none focus:ring-1 ring-gray-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
              <div className="text-right mt-1">
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="bg-green text-white text-sm font-medium py-3 px-6 w-full sm:w-fit rounded-lg"
            >
              Sign In
            </Button>
          </Form>
        </Formik>
        <div className="flex items-center gap-3.5 mb-6 mt-10">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-400 text-sm">Sign in with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex flex-col sm:flex-row w-full gap-4">
          {socialButtons.map((btn, index) => (
            <a
              key={index}
              href={btn.href}
              className="flex flex-1 justify-center rounded-lg gap-2 items-center py-3 h-fit border border-[#B2B5C4] hover:bg-accent hover:text-accent-foreground"
            >
              <img src={btn.src} alt={btn.label} className="w-5 h-5 mr-2" />
              <span>{btn.label}</span>
            </a>
          ))}
        </div>
      </div>

      <img
        ref={imgAnim.ref}
        src={loginstimg}
        alt="Login"
        className={`animate-hidden ${imgAnim.animation} ${
          imgAnim.isVisible ? "show" : ""
        } col-span-1 rounded-xl hidden md:block h-full w-full object-cover`}
      />
    </div>
  );
}
