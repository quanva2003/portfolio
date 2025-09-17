import React from "react";

const Button = ({
  href,
  content,
  onClick,
  download,
  fileName,
}: {
  href?: string;
  content: string;
  onClick?: () => void;
  download?: boolean;
  fileName?: string;
}) => {
  const handleDownload = () => {
    if (download && fileName) {
      const link = document.createElement("a");
      link.href = `/cv/${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <a
      href={href}
      className="hover:cursor-pointer inline-block px-7 py-3 bg-[#00fbff] rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-[#323946] font-semibold hover:shadow-none transition duration-500"
      onClick={onClick || handleDownload}
      download={download ? fileName : undefined}
    >
      {content}
    </a>
  );
};

export default Button;
