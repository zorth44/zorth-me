"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
      {/* 个人简介和项目展示 */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl">
        {/* 个人简介 */}
        <Card className="w-full md:w-1/2 aspect-square">
          <CardBody className="flex flex-col items-center justify-center gap-4">
            <Image src="/me.png" alt="Logo" width={150} height={150} className="rounded-full" />
            <div className="text-center">
              <h1 className={title()}>Zorth</h1>
              <p className={subtitle()}>昨夜西风凋碧树，独上高楼，望尽天涯路</p>
            </div>
          </CardBody>
        </Card>

        {/* 项目展示 */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          {[{ name: "ZRss", description: "一个基于Golang的Rss订阅程序", status: "inProgress", link: "https://github.com/zorth44/zorth-rss", icon: "/Rss.png" },
          { name: "ZorthMe", description: "简洁的个人主页", status: "inProgress", link: "https://github.com/zorth44/zorth-me", icon: "/me.png" },
          { name: "即将推出", description: "新项目正在酝酿中...", status: "upcoming", icon: "/wate.png" },
          { name: "敬请期待", description: "创意正在萌芽...", status: "upcoming", icon: "/wate.png" }
          ].map((project, index) => (
            <Card
              key={index}
              className={`aspect-square hover:scale-105 transition-transform duration-300 ${project.status === 'inProgress' ? 'bg-yellow-50 dark:bg-yellow-900' : 'bg-gray-50 dark:bg-gray-800'}`}
              isPressable={!!project.link}
              onPress={() => project.link && window.open(project.link, '_blank')}
            >
              <CardBody className="flex flex-col justify-between p-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={project.icon || '/default-icon.png'}
                    alt={`${project.name} icon`}
                    width={64}
                    height={64}
                    className="mb-4 rounded-lg"
                  />
                  <h2 className={`${title({ size: "sm" })} text-center mb-3 text-foreground`}>{project.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 overflow-hidden text-center">{project.description}</p>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${project.status === 'inProgress' ? 'bg-yellow-400 animate-pulse' : 'bg-gray-400'}`}></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.status === 'inProgress' ? '开发中' : '计划中'}
                  </span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* 联系方式 */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4">联系方式</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {[{ name: "X", username: "@ZorthNicolas", href: "https://twitter.com/ZorthNicolas", bgColor: "bg-gradient-to-br from-gray-900 to-gray-700", icon: FaTwitter },
          { name: "GitHub", username: "@zorth44", href: "https://github.com/zorth44", bgColor: "bg-gradient-to-br from-gray-800 to-gray-600", icon: FaGithub },
          { name: "邮箱", username: "nicolaszorth@gmail.com", href: "mailto:nicolaszorth@gmail.com", bgColor: "bg-gradient-to-br from-gray-700 to-gray-500", icon: FaEnvelope }
          ].map((contact, index) => (
            <Card key={index} className={`flex-1 ${contact.bgColor} text-white hover:scale-105 transition-transform duration-300`}>
              <CardBody className="flex flex-col justify-between p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`${title({ size: "sm" })}`}>{contact.name}</h3>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white bg-opacity-20">
                    <contact.icon className="text-lg text-white" />
                  </div>
                </div>
                <Link
                  href={contact.href}
                  className="text-sm bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-all text-white no-underline hover:text-opacity-80 truncate w-full text-center"
                >
                  {contact.username}
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* 技能/兴趣 */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-4">技术栈</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {[{ name: "TypeScript", description: "熟悉的前端编程语言，常搭配使用的有Node / React / Tailwind 等。", icon: "TS", bgColor: "bg-blue-50", iconBg: "bg-blue-500", textColor: "text-blue-600" },
          { name: "Java", description: "熟悉Java后端开发，包括Spring Boot、Hibernate等框架。", icon: "Java", bgColor: "bg-red-50", iconBg: "bg-red-500", textColor: "text-red-600" },
          { name: "Golang", description: "掌握Go语言，用于构建高性能的微服务和并发应用。", icon: "Go", bgColor: "bg-cyan-50", iconBg: "bg-cyan-500", textColor: "text-cyan-600" },
          { name: "Swift", description: "正在学习的语言，用于iOS和macOS应用开发。", icon: "Swift", bgColor: "bg-orange-50", iconBg: "bg-orange-500", textColor: "text-orange-600" },
            // ... 其他技能
          ].map((skill, index) => (
            <Card key={index} className={`flex-1 ${skill.bgColor}`}>
              <CardBody className="p-4 flex flex-col">
                <div className="flex-grow">
                  <h3 className={`${skill.textColor} text-xl font-bold mb-2`}>{skill.name}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
                <div className={`self-end mt-4 ${skill.iconBg} text-white font-bold p-2 rounded-full w-10 h-10 flex items-center justify-center`}>
                  {skill.icon}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
