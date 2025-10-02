import { useLocation, useNavigate } from "react-router";
import studentImg from "../../assets/images/student.jpg";
import instructorImg from "../../assets/images/instructor.jpg";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import facebookIcon from "@/assets/icons/facebook.svg";
import googleIcon from "@/assets/icons/google.svg";
import microsoftIcon from "@/assets/icons/microsoft.svg";

const formSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  username: z.string().min(1),
  email: z.string(),
  password: z.string().min(1),
  confirmpassword: z.string().min(1),
});

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location?.state?.role;
  useEffect(() => {
    if (!role) {
      navigate("/welcome");
    }
  }, [role, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="grid grid-cols-5 gap-12 px-2 mb-40 mt-40">
      <div className="md:col-span-3 col-span-5">
        <h1 className="font-semibold text-3xl text-center">
          Create {role ? role.charAt(0).toUpperCase() + role.slice(1) : ""}{" "}
          Account
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-900 text-base md:text-lg">
                        Full name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First name"
                          type="text"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-12 sm:col-span-6 flex">
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="flex-grow-1">
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input
                          className="mt-auto"
                          placeholder="Last name"
                          type="text"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-900 text-base md:text-lg">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="username" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-900 text-base md:text-lg">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="email ID" type="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-900 text-base md:text-lg">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-12 sm:col-span-6">
                <FormField
                  control={form.control}
                  name="confirmpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-900 text-base md:text-lg">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="bg-green text-white text-sm font-medium py-3 px-6 w-full sm:w-fit"
            >
              Create Account
            </Button>
          </form>
        </Form>

        {/* gray line */}
        <div className="flex gap-3.5 items-center mb-6">
          <div className="bg-gray-disable h-[1px] w-full"></div>
          <p className="text-sm text-gray-disable shrink-0">Sign up with</p>
          <div className="bg-gray-disable h-[1px] w-full"></div>
        </div>

        {/* 3 buttons */}
        <div className="flex flex-col sm:flex-row w-full gap-4">
          <Button
            variant="outline"
            className="flex flex-1 gap-2 items-center py-3 h-fit border border-[#B2B5C4] "
          >
            <img src={facebookIcon} alt="facebook icon" />
            FaceBook
          </Button>
          <Button
            variant="outline"
            className="flex flex-1 gap-2 items-center py-3 h-fit border border-[#B2B5C4] "
          >
            <img src={googleIcon} alt="google icon" />
            Google
          </Button>
          <Button
            variant="outline"
            className="flex flex-1 gap-2 items-center py-3 h-fit border border-[#B2B5C4] "
          >
            <img src={microsoftIcon} alt="microsoft icon" />
            Microsoft
          </Button>
        </div>
      </div>
      <img
        className="col-span-2 rounded-xl hidden md:block h-full w-full object-cover"
        src={
          role == "student"
            ? studentImg
            : role == "instructor"
            ? instructorImg
            : adminImg
        }
        alt="an image of a person"
      />
    </div>
  );
};

export default Register;
