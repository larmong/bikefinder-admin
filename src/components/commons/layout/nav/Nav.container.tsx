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
  const DASHBOARD_MENU = [
    {
      icon: <MdSpaceDashboard />,
      name: "대시보드",
      route: "/",
      subMenu: [],
      isOpen: true,
    },
    {
      icon: <HiUserGroup />,
      name: "회원관리",
      route: "/user",
      subMenu: [
        {
          name: "일반회원",
          route: "/member",
        },
        {
          name: "관리자",
          route: "/admin",
        },
      ],
      isOpen: false,
    },
    {
      icon: <IoMdChatbubbles />,
      name: "문의관리",
      route: "/faq",
      subMenu: [
        {
          name: "자주묻는질문",
          route: "/a",
        },
        {
          name: "일대일문의",
          route: "/b",
        },
      ],
      isOpen: false,
    },
    {
      icon: <RiArtboard2Fill />,
      name: "시민센터",
      route: "",
      subMenu: [
        {
          name: "공지사항",
          route: "",
        },
        {
          name: "협력업체",
          route: "",
        },
      ],
      isOpen: false,
    },
  ];

  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useRecoilState(isNavOpenState);
  const [dashboardMenu, setDashboardMenu] = useState(DASHBOARD_MENU);

  const onClickNavOpen = () => {
    setIsNavOpen((prov: boolean) => !prov);
  };
  const onClickMoveToHome = () => {
    void router.push(`/`);
  };

  useEffect(() => {
    console.log(router.route);
    const updatedMenu = dashboardMenu.map((menu) => {
      if (menu.route === router.route) {
        return { ...menu, isOpen: true };
      } else {
        return { ...menu, isOpen: false };
      }
    });
    setDashboardMenu(updatedMenu);
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
