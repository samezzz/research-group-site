interface HeadingProps {
  className: string
  title: string
  text: string
}

const Heading: React.FC<HeadingProps> = ({ className, title, text }) => {
  return (
    <div
      className={`${className} mx-auto mb-12 max-w-[50rem] md:text-center lg:mb-20`}>
      {title && <h2 className="h2 text-4xl font-extrabold">{title}</h2>}
      {text && <p className="text-gray-200">{text}</p>}
    </div>
  );
};

export default Heading;
