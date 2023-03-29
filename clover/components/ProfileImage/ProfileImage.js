import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import styles from "./profile.module.scss";
const ProfileImage = (props) => {
  //   const [imageUpload, setImageUpload] = useState(null);
  //   const { data } = useSession();
  //   const storage = getStorage(firebaseApp);
  //   const imageListRef = ref(storage, "images/");

  const upload = () => {
    // if (imageUpload === null) {
    //   alert("올바른 이미지를 첨부해주세요");
    //   return;
    // }
    // // 이미지 업로드하고
    // const imageRef = ref(storage, `images/${data.user.email}`);
    // uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     document.querySelector("#profileImg").src = url;
    //     console.log(url);
    //   });
    // });
    // alert("프로필 이미지 변경");
  };
  // 업로드 한 이미지 변경
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {});
  //     });
  //   });
  console.log(props.sessionData.user);
  return (
    <>
      <div id={styles.image}>
        <Image
          id={styles.profileImg}
          src={props.sessionData.user.image}
          alt=""
          width={100}
          height={100}
        ></Image>
      </div>
      <div id={styles.profile}>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button onClick={upload}>업로드</button>
      </div>
    </>
  );
};

export default ProfileImage;
