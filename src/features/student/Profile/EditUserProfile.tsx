import { type userProfile } from "@/types/userProfile";
import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import edit from "../../../assets/icons/edit.svg";
import axiosInstance from "@/lib/axios-instance";
import profile from "../../../assets/icons/profile.svg";
import { toast } from "sonner";
import EditUserProfileLoading from "@/features/student/user-profile/EditUserProfileLoading";

const EditUserProfile = () => {
  const [user, setUser] = useState<userProfile>();
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    user?.image
  );

  useEffect(() => {
    axiosInstance.get("/profile").then((res) => {
      setUser(res.data.data.user);
      setPreviewImage(res.data.data.user.image);
    });
  }, []);

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (
      field: string,
      value: unknown,
      shouldValidate?: boolean
    ) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue("image", reader.result);
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (user?.image) setPreviewImage(user.image);
  }, [user]);

  if (!user) return <EditUserProfileLoading />;

  return (
    <Formik
      initialValues={{
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        bio: user?.bio || "",
        about: user?.about || "",
        twitter_link: user?.twitter_link || "",
        linkedin_link: user?.linkedin_link || "",
        youtube_link: user?.youtube_link || "",
        facebook_link: user?.facebook_link || "",
        image: user?.image || profile,
      }}
      validationSchema={Yup.object({
        first_name: Yup.string()
          .min(2, "First name must be at least 2 characters")
          .required("First name is required"),
        last_name: Yup.string()
          .min(2, "Last name must be at least 2 characters")
          .required("Last name is required"),
        bio: Yup.string()
          .max(50, "Bio must be at most 50 characters")
          .required("Bio is required"),
        about: Yup.string()
          .max(200, "About must be at most 200 characters")
          .required("About is required"),
        twitter_link: Yup.string().required("Twitter link is required"),
        linkedin_link: Yup.string().required("Linkedin link is required"),
        youtube_link: Yup.string().required("Youtube link is required"),
        facebook_link: Yup.string().required("Facebook link is required"),
      })}
      onSubmit={(values: Record<string, string | Blob>, { setSubmitting }) => {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          if (key === "image" && values.image) {
            formData.append(key, values.image);
          } else {
            formData.append(key, values[key]);
          }
        });

        axiosInstance
          .put("/profile", formData)
          .then((res) => {
            setUser(res.data.data.user);
            setPreviewImage(res.data.data.user.image);
            toast.success("Profile updated successfully");
          })
          .catch((err) => console.error(err))
          .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <div className="container m-8 p-12">
          <div className="flex gap-4 m-3">
            <img src={edit} alt="edit" loading="lazy" />
            <h1 className="font-bold">Edit Profile</h1>
          </div>

          {/* صورة البروفايل */}
          <div className="bg-[#F8FAFC] h-[175px] flex justify-center items-end relative">
            <img
              src={previewImage || profile}
              alt={user?.first_name}
              loading="lazy"
              className="w-32 h-32 mb-[-20px] rounded-[50%]"
            />

            <div className="absolute right-[40%] bottom-2">
              <img
                src={edit}
                alt="edit"
                loading="lazy"
                className="w-8 h-8 cursor-pointer bg-placeholder py-2 rounded-full"
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => handleImage(e, setFieldValue)}
                className="absolute top-0 left-0 w-8 h-8 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* الفورم */}
          <Form>
            <div className="ml-[10%] flex flex-col m-auto justify-center">
              <div className="flex gap-9 flex-wrap my-8 ">
                <div>
                  <label
                    htmlFor="first_name"
                    className="text-primary text-[17px] md:text-[20px] font-bold mb-2 mr-5"
                  >
                    First Name
                  </label>
                  <Field
                    name="first_name"
                    className="mt-2 border-2 border-border rounded-[8px] p-[16px] outline-none hover:border-primary"
                  />
                  <div className="text-danger text-[13px]">
                    <ErrorMessage name="first_name" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="text-primary text-[17px] md:text-[20px] font-bold mb-2  mr-5"
                  >
                    Last Name
                  </label>
                  <Field
                    name="last_name"
                    className="mt-2 border-2 border-border rounded-[8px] p-[16px] outline-none hover:border-primary"
                  />
                  <div className="text-danger text-[13px]">
                    <ErrorMessage name="last_name" />
                  </div>
                </div>
              </div>

              <div className="my-8 flex items-center gap-5">
                <label
                  htmlFor="bio"
                  className="text-primary text-[17px] md:text-[20px] font-bold mb-2"
                >
                  Headline
                </label>
                <Field
                  name="bio"
                  as="textarea"
                  className="mt-2 border-2 border-border rounded-[8px] p-[16px] w-[90%] outline-none hover:border-primary"
                />
                <div className="text-danger text-[13px]">
                  <ErrorMessage name="bio" />
                </div>
              </div>

              <div className="my-8 flex items-center gap-5">
                <label
                  htmlFor="about"
                  className="text-primary text-[17px] md:text-[20px] font-bold mb-2"
                >
                  About
                </label>
                <Field
                  name="about"
                  as="textarea"
                  className="mt-2 border-2 border-border rounded-[8px] p-[16px] w-[90%] outline-none hover:border-primary"
                />
                <div className="text-danger text-[13px]">
                  <ErrorMessage name="about" />
                </div>
              </div>

              {/* الروابط */}
              <div className="border-2 border-border rounded-[8px] w-[90%] p-8 mt-8">
                <h1 className="text-primary text-[17px] md:text-[20px] font-bold mb-2">
                  Links
                </h1>

                <div className="mb-4">
                  <label
                    htmlFor="twitter_link"
                    className="text-primary text-[14px] mb-2"
                  >
                    Twitter (X)
                  </label>
                  <Field
                    name="twitter_link"
                    className="mt-2 border border-border rounded-[8px] p-[16px] w-[100%] outline-none hover:border-primary text-[13px]"
                  />
                  <div className="text-danger text-[13px]">
                    <ErrorMessage name="twitter_link" />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="linkedin_link"
                    className="text-primary text-[14px] mb-2"
                  >
                    Linkedin
                  </label>
                  <Field
                    name="linkedin_link"
                    className="mt-2 border border-border rounded-[8px] p-[16px] w-[100%] outline-none hover:border-primary text-[13px]"
                  />
                  <div className="text-danger text-[13px]">
                    <ErrorMessage name="linkedin_link" />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="youtube_link"
                    className="text-primary text-[14px] mb-2"
                  >
                    Youtube
                  </label>
                  <Field
                    name="youtube_link"
                    className="mt-2 border border-border rounded-[8px] p-[16px] w-[100%] outline-none hover:border-primary text-[13px]"
                  />
                  <div className="text-danger text-[13px]">
                    <ErrorMessage name="youtube_link" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="facebook_link"
                    className="text-primary text-[14px] mb-2"
                  >
                    Facebook
                  </label>
                  <Field
                    name="facebook_link"
                    className="mt-2 border border-border rounded-[8px] p-[16px] w-[100%] outline-none hover:border-primary text-[13px]"
                  />
                  <div className="text-danger text-[13px]">
                    <ErrorMessage name="facebook_link" />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-[150px] rounded-lg p-2 ml-[50%] md:ml-[75%] mt-4 
                ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:opacity-90 text-white"
                }`}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EditUserProfile;
