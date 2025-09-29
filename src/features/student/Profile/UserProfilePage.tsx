import { type userProfile } from "@/types/userProfile";
import { Link } from "react-router-dom";
import edit from "../../../assets/icons/edit.svg";
import profile from "../../../assets/icons/profile.svg";
import { useFetchUserProfile } from "@/hooks/profile/learner-profile";
import ProfileLoading from "../user-profile/ProfileLoading";

const UserProfilePage = () => {
  const { data, isLoading } = useFetchUserProfile();

  const user = (data ?? null) as userProfile | null;
  console.log({ user });
  const twitter = user?.twitter_link || "";
  const linkedin = user?.linkedin_link || "";
  const youtube = user?.youtube_link || "";
  const facebook = user?.facebook_link || "";

  if (isLoading) return <ProfileLoading />;

  return (
    <div className="container m-8 p-12 rounded-[10px] border-2 border-border">
      {/* صورة البروفايل */}
      <div className="bg-[#F8FAFC] h-[175px] flex justify-center items-end">
        <img
          src={user?.image || profile}
          alt={user?.first_name}
          className="w-32 h-32 mb-[-20px] rounded-[50%]"
        />
      </div>

      {/* زرار تعديل */}
      <Link to="/edit-user-profile">
        <img
          src={edit}
          alt="edit"
          loading="lazy"
          className="w-8 h-8 cursor-pointer bg-border mt-[-20px] py-2 rounded-full absolute right-[15%]"
        />
      </Link>

      {/* بيانات المستخدم */}
      <div className="ml-[10%] lg:ml-[25%] flex flex-col m-auto justify-center">
        <div className="flex gap-8 md:gap-80 flex-wrap my-8">
          <div>
            <h1 className="text-[#11468f] text-[17px] md:text-[20px] font-bold mb-2">
              First Name
            </h1>
            <p>{user?.first_name}</p>
          </div>
          <div>
            <h1 className="text-[#11468f] text-[17px] md:text-[20px] font-bold mb-2">
              Last Name
            </h1>
            <p>{user?.last_name}</p>
          </div>
        </div>

        <div className="my-8">
          <h1 className="text-[#11468f] text-[17px] md:text-[20px] font-bold mb-2">
            Headline
          </h1>
          <p>{user?.bio}</p>
        </div>
        <div>
          <h1 className="text-[#11468f] text-[17px] md:text-[20px] font-bold mb-2">
            About
          </h1>
          <p>{user?.about}</p>
        </div>
      </div>

      {/* روابط السوشيال ميديا */}
      <div className="ml-[10%] lg:ml-[25%] flex flex-col m-auto justify-center mt-[50px] gap-5">
        <h1 className="text-[#11468f] text-[17px] md:text-[20px] font-bold mb-2">
          Links
        </h1>
        <Link className="hover:text-[#11468f]" to={twitter}>
          Twitter (X)
        </Link>
        <Link className="hover:text-[#11468f]" to={linkedin}>
          Linkedin
        </Link>
        <Link className="hover:text-[#11468f]" to={youtube}>
          Youtube
        </Link>
        <Link className="hover:text-[#11468f]" to={facebook}>
          Facebook
        </Link>
      </div>
    </div>
  );
};

export default UserProfilePage;
