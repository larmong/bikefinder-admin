import NavUI from "./Nav.presenter";
import { MdSpaceDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { IoMdChatbubbles } from "react-icons/io";
import { RiArtboard2Fill } from "react-icons/ri";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isNavOpenState } from "../../../../commons/store/store";

export default function Nav() {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useRecoilState(isNavOpenState);
  const [DASHBOARD_MENU, SET_DASHBOARD_MENU] = useState([
    {
      isOpen: true,
      icon: <MdSpaceDashboard />,
      name: "대시보드",
      route: "/",
      subMenu: [],
    },
    {
      isOpen: false,
      icon: <HiUserGroup />,
      name: "회원관리",
      route: "/user/member",
      subMenu: [
        {
          isSubOpen: false,
          name: "일반회원",
          route: "/user/member",
        },
        {
          isSubOpen: false,
          name: "관리자",
          route: "/user/admin",
        },
      ],
    },
    {
      isOpen: false,
      icon: <IoMdChatbubbles />,
      name: "문의관리",
      route: "/inquiry/faq",
      subMenu: [
        {
          isSubOpen: false,
          name: "자주묻는질문",
          route: "/inquiry/faq",
        },
        {
          isSubOpen: false,
          name: "일대일문의",
          route: "/inquiry/contact",
        },
      ],
    },
    {
      isOpen: false,
      icon: <RiArtboard2Fill />,
      name: "시민센터",
      route: "/citizen/notice",
      subMenu: [
        {
          isSubOpen: false,
          name: "공지사항",
          route: "/citizen/notice",
        },
        {
          isSubOpen: false,
          name: "협력업체",
          route: "/citizen/helped",
        },
      ],
    },
  ]);

  const onClickNavOpen = () => {
    setIsNavOpen((prov: boolean) => !prov);
  };
  const onClickMoveToHome = () => {
    void router.push(`/`);
  };

  useEffect(() => {
    const updatedMenu = DASHBOARD_MENU.map((menu) => {
      const route = router.route.split("/")[1];
      const pathname = menu.route.split("/")[1];
      if (route === pathname) {
        return { ...menu, isOpen: true };
      } else {
        return { ...menu, isOpen: false };
      }
    }).map((menu) => {
      if (menu.subMenu && Array.isArray(menu.subMenu)) {
        const updatedSubMenu = menu.subMenu.map((subMenuItem) => {
          if (subMenuItem.route === router.route) {
            return { ...subMenuItem, isSubOpen: true };
          } else {
            return { ...subMenuItem, isSubOpen: false };
          }
        });
        return { ...menu, subMenu: updatedSubMenu };
      } else {
        return menu;
      }
    });

    SET_DASHBOARD_MENU(updatedMenu);
  }, [router.route]);

  return (
    <NavUI
      DASHBOARD_MENU={DASHBOARD_MENU}
      isNavOpen={isNavOpen}
      onClickNavOpen={onClickNavOpen}
      onClickMoveToHome={onClickMoveToHome}
    />
  );
}
