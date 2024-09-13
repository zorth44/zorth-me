export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6">
      <h1 className="text-5xl font-extrabold text-center mb-12">
        <span className="mr-2 animate-wave inline-block">👋</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          I'm Zorth
        </span>
      </h1>
      <div className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
          我是一名非全职的开发者，最熟练的语言是JAVA，目前正在学习Golang和Swift。24年的目标是可以开发一个自己的app。
        </p>
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
          24年发生了很多事情让我决定开始走上独立开发这条路，希望可以坚持下去。
        </p>
      </div>
    </div>
  );
}
