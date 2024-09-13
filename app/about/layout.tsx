export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-grow flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="px-6 py-8 sm:p-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
