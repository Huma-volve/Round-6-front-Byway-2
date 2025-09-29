import Fpass from "@/assets/images/Fpass.png";
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
import { useNavigate } from "react-router";

const formSchema = z.object({
  password: z.string().min(1),
  confirmpassword: z.string().min(1),
});

const ResetPassword = () => {
  const navigate = useNavigate();
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
      navigate("/instructors/dashboard");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="grid grid-cols-2 gap-6 px-2 mb-40 mt-40">
      <div className="col-span-2 md:col-span-1">
        <h1 className="font-semibold text-3xl text-center mb-4">
          Create a New Password
        </h1>
        <p className="text-gray-40 text-base font-medium text-center">
          Recover your account password
        </p>

        {/* form goes here */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter new password"
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-green text-white text-sm font-medium py-3 px-6"
            >
              Continue
            </Button>
          </form>
        </Form>
      </div>
      <img
        src={Fpass}
        alt="a shield"
        className="col-span-1 rounded-xl hidden md:block h-full w-full object-cover"
      />
    </div>
  );
};

export default ResetPassword;
