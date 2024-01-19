"use client"

import { Separator } from "@/components/ui/separator"
import Nav from "@/components/Nav"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { X, Github, ArrowDownCircle, ArrowUpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { toast } from "sonner"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React, { useEffect, useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  user_email: z.string().email({
    message: "Please give a valid email with @.",
  }),
  message: z.string().min(1, {
    message: "Don't leave the message empty.",
  }),
})



export default function Home() {
  

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  })


  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values.message)
    const templateParams = {
      from_name: values.user_name,
      from_email: values.user_email,
      message: values.message,
    }

    emailjs.send('service_9nlubjw', 'template_k2tq1vy', templateParams, 'IwgJWDbqGizHYQitq')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        toast("Email has been sent.")
        form.reset();
      }, function (error) {
        console.log('FAILED...', error);
        toast("Something went wrong, please try again later.")
      });
  }

  return (

    
    <main className="">
      <Nav />

      <section className="flex flex-col xl:flex-row">
        <div className="basis-2/5 mt-20 xl:mt-0 h-screen">
          <Image src="/j0nssi.png" alt="J0nssi"
            className="xl:p-4 mx-auto xl:mx-0"
            width={807}
            height={600}
            quality={100}
            sizes="(max-width: 1280px) 80vh, 100vh"
            style={{
              width: 'auto',
              height: '100%',
            }}
            priority

          ></Image>
        </div>
        <div data-scroll data-scroll-speed="0.3" className="basis-3/5 xl:pr-32 flex flex-col justify-center bg-background">
          <div className="text-center xl:text-start flex flex-col pt-4">
            
          <Separator className="xl:my-8 my-4" />
            <p className="text-3xl xl:text-9xl xl:tracking-tighter pb-2 xl:pb-8 font-bold">JO<span className="text-primary">ON</span>AS VAIJA</p>
            <p className="text-2xl xl:text-8xl tracking-widest xl:pb-2"><span className="text-primary">WEB DEVELOPER</span></p>
            <p className="text-2xl xl:text-8xl tracking-widest">UI/<span className="text-primary">UX</span> DESIGNER</p>
            <Separator className="xl:my-8 my-4" />
          </div>

          <ArrowDownCircle data-scroll-to data-scroll-to-href="#Projects" className="animate-bounce mt-6 w-12 h-12 xl:w-24 xl:h-24 mx-auto xl:ml-[15vw] cursor-pointer" />
        </div>
      </section>


      <section id="Projects" className="pt-24 xl:pt-48 gap-8 justify-center text-center">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div className="pt-12 px-2">

          <Carousel className="w-[75%] mx-auto" opts={{
            align: "start",
            loop: true,
          }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}>
            <CarouselContent>
              <CarouselItem className="xl:basis-1/2">
                <Drawer>
                  <DrawerDescription className="text-xl text-foreground">   
                  Vilkku-fillarit datapage
                  </DrawerDescription>
                  <Separator className="mb-4 xl:mb-6 mt-1 xl:mt-2 w-2/3 mx-auto" />
                  <DrawerTrigger className="w-full">
                  <AspectRatio ratio={16 / 9}>
                      <Image src="/vilkku.PNG" alt="Vilkkufillarit"
                    className="mx-auto"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority

                  ></Image>
                  </AspectRatio>
                  </DrawerTrigger>

                  <DrawerContent>
                    <DrawerClose className="absolute top-0 right-0">
                      <Button variant="outline"><X /></Button>
                    </DrawerClose>
                    <div className="text-center">
                      <DrawerHeader className="p-2 xl:pt-6">
                        <DrawerTitle className="text-2xl font-bold text-center xl:text-4xl">Vilkku-fillarit datapage</DrawerTitle>
                      </DrawerHeader>
                      <div className="p-4 flex flex-col">
                        <div>
                          <Image src="/vilkku.PNG" alt="Vilkkufillarit"
                            className="mx-auto"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority

                          ></Image>
                        </div>
                        <div className="py-6">
                          <h1 className="text-2xl font-bold pb-2 xl:text-3xl">General</h1>
                          <p className="text-l text-foreground">Full-stack, responsive webpage to show different type of data about Vilkku-fillarit users and bikes' usage.</p>
                          <p className="text-l text-foreground">Tools: React, Html, CSS, Node.js, PostgreSQL, Python, Metabase</p>
                          <h1 className="pt-6 text-2xl font-bold pb-2 xl:text-3xl">Responsibilities</h1>
                          <p className="text-l text-foreground pb-6">Front-end, Python script to save data from open data source, Docker containers</p>
                          <a href="https://fillaridata.savonia.fi" target="_blank" rel="noreferrer"><Button variant="outline">Live site</Button></a>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/2">
                <Drawer>
                <DrawerDescription className="text-xl text-foreground">   
                  Incoach webpage
                  </DrawerDescription>
                  <Separator className="mb-4 xl:mb-6 mt-1 xl:mt-2 w-2/3 mx-auto" />
                  <DrawerTrigger className="w-full">
                    <AspectRatio ratio={16 / 9}>
                    <Image src="/incoach.png" alt="Incoach"
                    className="mx-auto"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority

                  ></Image>
                  </AspectRatio>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerClose className="absolute top-0 right-0">
                      <Button variant="outline"><X /></Button>
                    </DrawerClose>
                    <div className="text-center">
                      <DrawerHeader className="p-2 xl:pt-6">
                        <DrawerTitle className="text-2xl font-bold text-center xl:text-4xl">Incoach webpage</DrawerTitle>
                      </DrawerHeader>

                      <div className="p-4 flex flex-col">
                        <div>
                          <Image src="/incoach.png" alt="Incoach"
                            className="mx-auto"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority

                          ></Image>
                        </div>
                        <div className="py-6">
                          <h1 className="text-2xl font-bold pb-2 xl:text-3xl">General</h1>
                          <p className="text-l text-foreground">Responsive webpage for Incoach.</p>
                          <p className="text-l text-foreground">Tools: Figma, Wix Studio</p>
                          <h1 className="pt-6 text-2xl font-bold pb-2 xl:text-3xl">Responsibilities</h1>
                          <p className="text-l text-foreground pb-6">UI/UX designing, Frontend, Basic SEO, Writing Thesis</p>
                          <a href="https://www.incoach.fi" target="_blank" rel="noreferrer"><Button variant="outline">Live site</Button></a>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/2">
                <Drawer>
                <DrawerDescription className="text-xl text-foreground">   
                  Portfolio V2
                  </DrawerDescription>
                  <Separator className="mb-4 xl:mb-6 mt-1 xl:mt-2 w-2/3 mx-auto" />
                  <DrawerTrigger className="w-full">
                  <AspectRatio ratio={16 / 9}>
                    <Image src="/portfolio2.PNG" alt="PortfolioV2"
                    className="mx-auto"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  ></Image>
                  </AspectRatio>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerClose className="absolute top-0 right-0">
                      <Button variant="outline"><X /></Button>
                    </DrawerClose>
                    <div className="text-center">
                      <DrawerHeader className="p-2 xl:pt-6">
                        <DrawerTitle className="text-2xl font-bold text-center xl:text-4xl">Portfolio V2</DrawerTitle>
                      </DrawerHeader>

                      <div className="p-4 flex flex-col">
                        <div>
                          <Image src="/portfolio2.PNG" alt="Portfolio2"
                            className="mx-auto"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority

                          ></Image>
                        </div>
                        <div className="py-6">
                          <h1 className="text-2xl font-bold pb-2 xl:text-3xl">General</h1>
                          <p className="text-l text-foreground">Responsive portfolio webpage for myself, V2 edition.</p>
                          <p className="text-l text-foreground">Tools: Next.js, Tailwind CSS, CSS, Framer Motion</p>
                          <h1 className="pt-6 text-2xl font-bold pb-2 xl:text-3xl">Responsibilities</h1>
                          <p className="text-l text-foreground pb-6">I coded everything myself from scratch, watching tutorials and other portfolios.</p>
                          <div className="flex flex-row justify-center items-center gap-24">
                          <a href="https://portfolio-v2-iota-ashy.vercel.app" target="_blank"><Button variant="outline">Live site</Button></a>
                          <a href="https://github.com/J0nssi/PortfolioV2" target="_blank" ><Github className="scale-125" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/2">
                <Drawer>
                <DrawerDescription className="text-xl text-foreground">   
                  OSRS Utility App
                  </DrawerDescription>
                  <Separator className="mb-4 xl:mb-6 mt-1 xl:mt-2 w-2/3 mx-auto" />
                  <DrawerTrigger className="w-full">
                  <AspectRatio ratio={16 / 9}>
                    <Image src="/osrs1.jpg" alt="OSRS"
                    className="mx-auto object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority

                  ></Image>
                  </AspectRatio>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerClose className="absolute top-0 right-0">
                      <Button variant="outline"><X /></Button>
                    </DrawerClose>
                    <div className="text-center">
                      <DrawerHeader className="p-2 xl:pt-6">
                        <DrawerTitle className="text-2xl font-bold text-center xl:text-4xl">OSRS Utility App</DrawerTitle>
                      </DrawerHeader>

                      <div className="p-4 flex flex-col">
                        <div>
                          <Image src="/osrs1.jpg" alt="OSRS"
                            className="mx-auto"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority

                          ></Image>
                        </div>
                        <div className="py-6">
                          <h1 className="text-2xl font-bold pb-2 xl:text-3xl">General</h1>
                          <p className="text-l text-foreground">Mobile app where you can search Old School runescape items' Grand Exchange pricing or players' HiScores.</p>
                          <p className="text-l text-foreground">Tools: Kotlin</p>
                          <h1 className="pt-6 text-2xl font-bold pb-2 xl:text-3xl">Responsibilities</h1>
                          <p className="text-l text-foreground pb-6">Vertical and horizontal views. Component layouting.</p>
                          <div className="flex flex-row justify-center items-center gap-24">
                          <a href="https://github.com/J0nssi/osrs-utility-app-android"><Github className="scale-125" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/2">
                <Drawer>
                <DrawerDescription className="text-xl text-foreground">   
                  Portfolio V1
                  </DrawerDescription>
                  <Separator className="mb-4 xl:mb-6 mt-1 xl:mt-2 w-2/3 mx-auto" />
                  <DrawerTrigger className="w-full">
                  <AspectRatio ratio={16 / 9}>
                    <Image src="/portfolio1.PNG" alt="PortfolioV1"
                    className="mx-auto"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority

                  ></Image>
                  </AspectRatio>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerClose className="absolute top-0 right-0">
                      <Button variant="outline"><X /></Button>
                    </DrawerClose>
                    <div className="text-center">
                      <DrawerHeader className="p-2 xl:pt-6">
                        <DrawerTitle className="text-2xl font-bold text-center xl:text-4xl">Portfolio V1</DrawerTitle>
                      </DrawerHeader>

                      <div className="p-4 flex flex-col">
                        <div>
                          <Image src="/portfolio1.PNG" alt="PortfolioV1"
                            className="mx-auto"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority

                          ></Image>
                        </div>
                        <div className="py-6">
                          <h1 className="text-2xl font-bold pb-2 xl:text-3xl">General</h1>
                          <p className="text-l text-foreground">Portfolio webpage for myself, V1 edition.</p>
                          <p className="text-l text-foreground">Tools: React, CSS</p>
                          <h1 className="pt-6 text-2xl font-bold pb-2 xl:text-3xl">Responsibilities</h1>
                          <p className="text-l text-foreground pb-6">Didn't like this at all so I quickly updated my portfolio to V2.</p>
                          <div className="flex flex-row justify-center items-center gap-24">
                          <a href="https://j0nssi.github.io/Portfolio/" target="_blank"><Button variant="outline">Live site</Button></a>
                          <a href="https://github.com/J0nssi/Portfolio" target="_blank"><Github className="scale-125" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/2">
                <Drawer>
                <DrawerDescription className="text-xl text-foreground">   
                  FPS Game
                  </DrawerDescription>
                  <Separator className="mb-4 xl:mb-6 mt-1 xl:mt-2 w-2/3 mx-auto" />
                  <DrawerTrigger className="w-full">
                  <AspectRatio ratio={16 / 9}>
                    <Image src="/fps.png" alt="fps"
                    className="mx-auto"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority

                  ></Image>
                  </AspectRatio>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerClose className="absolute top-0 right-0">
                      <Button variant="outline"><X /></Button>
                    </DrawerClose>
                    <div className="text-center">
                      <DrawerHeader className="p-2 xl:pt-6">
                        <DrawerTitle className="text-2xl font-bold text-center xl:text-4xl">FPS Game</DrawerTitle>
                      </DrawerHeader>

                      <div className="p-4 flex flex-col">
                        <div>
                          <Image src="/fps.png" alt="fps"
                            className="mx-auto"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority

                          ></Image>
                        </div>
                        <div className="py-6">
                          <h1 className="text-2xl font-bold pb-2 xl:text-3xl">General</h1>
                          <p className="text-l text-foreground">School course project, FPS game with different guns, AI mechanics and scoreboard counting.</p>
                          <p className="text-l text-foreground">Tools: Unity, Blender</p>
                          <h1 className="pt-6 text-2xl font-bold pb-2 xl:text-3xl">Responsibilities</h1>
                          <p className="text-l text-foreground pb-6">Gun shooting and recoil, magazine size</p>
                          <div className="flex flex-row justify-center items-center gap-24">
                          <a href="https://github.com/J0nssi/movement-fps" target="_blank"><Github className="scale-125" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CarouselItem>


            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext /> 
          </Carousel>

        </div>
      </section>

      <section id="About" className="pt-24 xl:pt-48">
        <h1 className="text-center text-5xl font-bold">About</h1>
        <Tabs defaultValue="about" className="justify-center text-center pt-6">
          <TabsList>
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="work">Work history</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <div className='justify-center items-center m-auto lg:p-12 col-span-2 w-[100vw] xl:w-1/3'>
              <p className='p-4 text-xl'>For whatever reason you ended up to my portfolio, welcome. I hope you enjoyed browsing it as much as I enjoyed developing it but let me introduce myself now.</p>
              <p className='p-4 text-xl'>It all started when I applied to Savonia UAS in 2019 after working about three years in property maintenance. I got into my Bachelor of Engineering, Information Technology studies and four and half years later I'm near the finish line with my studies.</p>
              <p className='p-4 text-xl'>As a web developer I'm trying to help companies and brands to build their online presence, develop eye-cathing websites and compete in rapidly growing digital landscape.</p>
              <p className='p-4 text-xl'>In my sparetime, I'm challenging myself competing in ice hockey or CS2, going to the gym, hanging out with my friends or just relaxing at home.</p>
            </div>
          </TabsContent>

          <TabsContent value="work">
            <div className='justify-center items-center m-auto lg:p-12 col-span-2 w-[85vw] xl:w-1/2'>
              <div>
                <h2 className='pt-6 tracking-wide font-bold text-2xl'>UI/UX DESIGNER AND FRONTEND DEVELOPER</h2>
                <p className='text-xl pt-4'>Incoach</p>
                <p className='pt-2'>6/2023 - 2/2024</p>
                <p className='pt-4'>Thesis, Created UI/UX design, developed new website for Incoach</p>
              </div>
              <Separator className="my-8" />
              <div>
                <h2 className='tracking-wide font-bold text-2xl'>IT SUPPORT</h2>
                <p className='text-xl pt-4'>Istekki Oy</p>
                <p className='pt-2'>1/2023 - 6/2023</p>
                <p className='pt-4'>Solved IT support tasks</p>
                <p className='pt-2'>Pre-installed PCs with right software</p>
                <p className='pt-2'>Replaced old PCs and peripherals with new ones</p>
                <p className='pt-2'>Installed new workstations</p>

              </div>
              <Separator className="my-8" />
              <div>
                <h2 className='tracking-wide font-bold text-2xl'>WEB DEVELOPER</h2>
                <p className='text-xl pt-4'>Savonia, Green Data Project, Vilkku-fillarit</p>
                <p className='pt-2'>6/2022 - 9/2022</p>
                <p className='pt-4'>Website designing and frontend coding.</p>
                <p className='pt-2'>Created python scripts to save and calculate data from open data
                  source about Vilkku-fillarit bikes' users and usage.</p>
                <p className='pt-2'>Built docker container for the Python scripts and scheduled them
                  with cron.</p>
                <p className='pt-2'>Worked with Kuopio city and team members from Savonia.</p>
              </div>
              <Separator className="my-8" />
              <div>
                <h2 className='tracking-wide font-bold text-2xl'>PROPERTY MANAGER</h2>
                <p className='text-xl pt-4'>Eskolanmäen Kiinteistöpalvelut Oy</p>
                <p className='pt-2'>2017 - 2019</p>
                <p className='pt-2'>Learned cooperation with other employees.</p>
                <p className='pt-2'>Learned how modern web apps can speed up the recording
                  progress about incoming and completed tasks.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className='justify-center items-center m-auto lg:p-12 col-span-2 w-[85vw] lg:w-1/2'>
              <h1 className="text-2xl font-bold pt-6">FRONTEND ADDICTED.</h1>
              <h1 className="text-2xl font-bold">FULLSTACK CAPABLE.</h1>
              <div>
                <h2 className='pt-12 tracking-widest text-2xl'>Languages</h2>
                <p className='text-xl'>JavaScript, TypeScript, HTML, CSS, Python, C#, SQL</p>
              </div>
              <Separator className="my-8" />
              <div>
                <h2 className='tracking-widest text-2xl'>Frameworks / Libraries / Others</h2>
                <p className='text-xl'>React.js, Next.js, Tailwind, Framer Motion, GSAP, Git, NPM</p></div>
              <Separator className="my-8" />
              <div>
                <h2 className='tracking-widest text-2xl'>UI / UX</h2>
                <p className='text-xl'>Figma, Responsive design, Prototyping, Adobe Photoshop</p></div>
              <Separator className="my-8" />
              <div>
                <h2 className='tracking-widest text-2xl'>Other skills</h2>
                <p className='text-xl'>Videoediting: Sony Vegas Pro, Davinci Resolve</p>
                <p className='text-xl'>PC assembly and needed installations</p></div>
              <Separator className="my-8" />
              <div><h2 className='tracking-widest text-2xl'>Learning</h2>
                <p className='text-xl'>Adobe Xd</p></div>
            </div>
          </TabsContent>
        </Tabs>

      </section>


      <section id="Contact">
        <h1 className="text-5xl font-bold text-center pt-24">Contact me</h1>
        <div className="xl:w-[30vw] mx-auto text-center p-8"><Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>

              )}
            />
            <FormField
              control={form.control}
              name="user_email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>

              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>

              )}
            />
            <Button type="submit">Send message</Button>
          </form>
        </Form>
        <ArrowUpCircle data-scroll-to data-scroll-to-href="top" className="animate-bounce mt-12 w-8 h-8 xl:w-12 xl:h-12 mx-auto justify-center cursor-pointer" />

        </div>


      </section>
    </main>
  )
}
