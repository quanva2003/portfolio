interface LinkButtonProps {
  href: string;
  content: string;
}

export function LinkButton({ href, content }: LinkButtonProps) {
  return (
    <a
      href={href}
      className="hover:cursor-pointer inline-block px-7 py-3 bg-[#00fbff] rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-[#323946] font-semibold hover:shadow-none transition duration-500"
    >
      {content}
    </a>
  );
}

interface DownloadButtonProps {
  content: string;
  fileName: string;
}

export function DownloadButton({ content, fileName }: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/cv/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a
      href={`/cv/${fileName}`}
      download={fileName}
      onClick={handleDownload}
      className="hover:cursor-pointer inline-block px-7 py-3 bg-[#00fbff] rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-[#323946] font-semibold hover:shadow-none transition duration-500"
    >
      {content}
    </a>
  );
}
