
const TimelineItem = ({ title, date, children }: { title: string, date: string, children: React.ReactNode }) => (
  <div className="mb-10 ml-4">
    <div className="absolute -left-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{children}</p>
  </div>
)


export default TimelineItem;
