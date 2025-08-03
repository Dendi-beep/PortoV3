import {
  Code,
  Palette,
  Zap,
  Heart,
  Award,
  MapPin,
  Calendar,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function About() {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Membuat aplikasi web dan mobile dengan teknologi terbaru seperti React, React Native, Node.js, dan Express.js.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Membuat desain yang menarik dan estetik untuk aplikasi web dan mobile.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Mengoptimalkan performa aplikasi web dan mobile dengan teknologi terbaru seperti Vite, Webpack, dan Next.js.",
    },
    {
      icon: Heart,
      title: "Consulting & Mentoring",
      description:
        "Membantu tim dan individu dalam memahami teknologi terbaru dan mengoptimalkan performa aplikasi web dan mobile.",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Full-Stack Developer",
      company: "Tech Innovations Inc.",
      description:
        "Membuat aplikasi web dan mobile dengan teknologi terbaru seperti React, React Native, Node.js, dan Express.js.",
    },
    {
      year: "2022",
      title: "Machine Learning Engineer",
      company: "AI Solutions Inc.",
      description:
        "Machine learning dan AI untuk membangun sistem yang dapat memprediksi hasil dengan akurasi tinggi.",
    },
    {
      year: "2020",
      title: "Front-End Developer",
      company: "Web Solutions Inc.",
      description:
        "Membuat desain yang menarik dan estetik untuk aplikasi web dan mobile.",
    },
    {
      year: "2019",
      title: "Back-End Developer Golang",
      company: "Golang Solutions Inc.",
      description:
        "Menjadi back-end developer dengan bahasa pemrograman Golang.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/*Header*/}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Saya seorang pengembang yang bersemangat dengan pengalaman lebih
            dari 5 tahun dalam menciptakan solusi digital yang membawa
            perubahan. Saya senang mengubah masalah yang rumit menjadi desain
            yang sederhana dan indah.
          </p>
        </div>

        {/*Personal Info*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Perjalanan saya di dunia teknologi dimulai saat kuliah, ketika
                  saya membangun aplikasi web pertama saya. Sejak saat itu, saya
                  bersemangat menciptakan perangkat lunak yang memecahkan
                  masalah dunia nyata dan memberikan pengalaman pengguna yang
                  luar biasa.
                </p>
                <p>
                  Selama bertahun-tahun, saya berkesempatan bekerja dengan
                  perusahaan rintisan dan perusahaan mapan, membantu mereka
                  membangun aplikasi web yang skalabel, meningkatkan kehadiran
                  digital mereka, dan menyederhanakan proses pengembangan
                  mereka.
                </p>
                <p>
                  Saat saya tidak sedang membuat kode, Anda dapat menemukan saya
                  menjelajahi teknologi baru, berkontribusi pada proyek sumber
                  terbuka, atau berbagi pengetahuan dengan komunitas pengembang
                  melalui postingan blog dan bimbingan.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-muted-foreground">
                        Sumatera,Indonesia
                      </div>
                    </>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <>
                      <div className="font-medium">Experience</div>
                      <div className="text-sm text-muted-foreground">
                        5 Years
                      </div>
                    </>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">
                        dedeny1321@gmail.com
                      </div>
                    </>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Specializations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Golang",
                    "Node.js",
                    "Python",
                    "Codeigniter",
                    "Laravel",
                    "Express",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/*Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
