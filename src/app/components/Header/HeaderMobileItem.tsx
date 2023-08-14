import Link from "next/link";

type HeaderMobileItemProps = {
  href: string;
  children: React.ReactNode;
};

export const HeaderMobileItem = ({ href, children }: HeaderMobileItemProps) => {
  return (
    <Link href={href} className="m-3 flex items-center rounded-lg">
      <div
        area-label="nav mobile"
        className="ml-4 
        text-base font-medium dark:text-white text-white"
      >
        {children}
      </div>
    </Link>
  );
};
