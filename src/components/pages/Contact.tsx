import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    //simulasi pengiriman form
    setTimeout(() => {
      toast.success("Pesan berhasil dikirim");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactinfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dedeny1321@gmail.com",
      description: "Kirimkan pesan melalui email",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "Github",
      url: "https://github.com/Dendi-Beep",
      username: "Dendi-Beep",
    },
    {
      icon: Linkedin,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/dendi-beep/",
      username: "Dendi Beep",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/DendiBeep",
      username: "DendiBeep",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/*Hiderr*/}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/*Contact Info*/}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Dendi Beep"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="dedeny1321@gmail"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="I want to work with you"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi, I want to work with you"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/*COnstact info*/}
          <div className="space-y-8">
            {/*Contact Information*/}
            <div className="space-y-6">
              {contactinfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Connect with me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {social.username}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>
            {/* Availability */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="font-semibold text-lg mb-2">Availability</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance projects and full-time
                opportunities.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">
                  Available for work
                </span>
              </div>
            </Card>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                What's your typical response time?
              </h3>
              <p className="text-muted-foreground text-sm">
                I usually respond to emails within 24 hours on weekdays. For
                urgent matters, feel free to call me directly.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                Do you work with international clients?
              </h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! I work with clients from all over the world and I'm
                comfortable with different time zones.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                What's your project minimum?
              </h3>
              <p className="text-muted-foreground text-sm">
                I don't have a strict minimum, but I prefer projects that allow
                for meaningful collaboration and impact.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">
                Do you offer maintenance services?
              </h3>
              <p className="text-muted-foreground text-sm">
                Yes, I provide ongoing maintenance and support for projects I've
                built, as well as existing applications.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
