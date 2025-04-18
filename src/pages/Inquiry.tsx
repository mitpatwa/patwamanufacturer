
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const inquiryFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number." }).optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  projectDescription: z.string().min(10, { message: "Please provide a brief description of your project." }),
  timeline: z.string().optional(),
  referenceSource: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

const defaultValues: Partial<InquiryFormValues> = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  projectDescription: "",
  timeline: "",
  referenceSource: "",
};

const Inquiry = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues,
  });

  const onSubmit = (data: InquiryFormValues) => {
    // In a real application, this would send the data to an API
    console.log("Form submitted:", data);
    console.log("Uploaded files:", files);
    
    // Show success toast
    toast.success("Your inquiry has been submitted successfully", {
      description: "Our team will contact you within 48 hours.",
    });
    
    setIsSubmitted(true);
    form.reset();
    setFiles([]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const projectTypes = [
    "Tassels",
    "Fringes",
    "Cords & Braids",
    "Embellishments & Trims",
    "Custom Drapery",
    "Other",
  ];

  const timelineOptions = [
    "Urgent (within 2 weeks)",
    "Near-term (2-4 weeks)",
    "Medium-term (1-3 months)",
    "Long-term (3+ months)",
    "Flexible",
  ];

  const referralSources = [
    "Search Engine",
    "Social Media",
    "Recommendation",
    "Interior Designer",
    "Previous Client",
    "Exhibition or Fair",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-sand-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-center">
                Request a Custom Quote
              </h1>
              <p className="text-muted-foreground text-center mb-12 leading-relaxed">
                Each project is unique, and we'd love to learn about yours. Please fill out the form below, and our team will respond within 48 hours to discuss your custom passementerie requirements.
              </p>

              {isSubmitted ? (
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center mb-6">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                  </div>
                  <h2 className="font-serif text-2xl font-medium mb-4">
                    Thank You for Your Inquiry
                  </h2>
                  <p className="mb-6 text-muted-foreground">
                    We've received your request and our team will review your project details promptly. 
                    You can expect to hear from us within 48 hours to discuss your custom requirements in detail.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="space-y-4">
                        <h2 className="font-serif text-xl font-medium">Contact Information</h2>
                        <Separator />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name*</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address*</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="Your email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company/Designer Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your company or designer name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h2 className="font-serif text-xl font-medium">Project Details</h2>
                        <Separator />
                        
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Type*</FormLabel>
                              <FormControl>
                                <select
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                  {...field}
                                >
                                  <option value="" disabled>Select project type</option>
                                  {projectTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="projectDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Description*</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please describe your project, including details about dimensions, colors, materials, or any specific requirements."
                                  className="min-h-32"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Timeline</FormLabel>
                              <FormControl>
                                <select
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                  {...field}
                                >
                                  <option value="" disabled>Select timeline</option>
                                  {timelineOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div>
                          <FormLabel>Reference Images</FormLabel>
                          <div className="mt-2 border-2 border-dashed border-gray-200 rounded-md py-10 px-6">
                            <div className="flex flex-col items-center">
                              <Upload className="h-10 w-10 text-gray-400 mb-2" />
                              <p className="text-sm text-center text-gray-500 mb-2">
                                Drag and drop files here, or click to browse
                              </p>
                              <p className="text-xs text-center text-gray-400 mb-4">
                                Accepted file types: JPG, PNG, PDF (Max 5MB each)
                              </p>
                              <input
                                type="file"
                                id="fileUpload"
                                multiple
                                onChange={handleFileChange}
                                className="hidden"
                                accept=".jpg,.jpeg,.png,.pdf"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById('fileUpload')?.click()}
                                size="sm"
                              >
                                Browse Files
                              </Button>
                            </div>
                          </div>
                          
                          {files.length > 0 && (
                            <div className="mt-4 space-y-2">
                              <p className="text-sm font-medium">Uploaded Files ({files.length})</p>
                              <ul className="text-sm">
                                {files.map((file, index) => (
                                  <li key={index} className="flex justify-between items-center py-2 border-b">
                                    <span className="truncate max-w-xs">{file.name}</span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => removeFile(index)}
                                    >
                                      Remove
                                    </Button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="referenceSource"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>How did you find us?</FormLabel>
                              <FormControl>
                                <select
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                  {...field}
                                >
                                  <option value="" disabled>Select option</option>
                                  {referralSources.map((source) => (
                                    <option key={source} value={source}>{source}</option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="pt-4">
                        <p className="text-xs text-muted-foreground mb-6">
                          By submitting this form, you agree to our privacy policy. We will use your 
                          information solely for the purpose of responding to your inquiry and will 
                          never share your details with third parties.
                        </p>
                        
                        <Button type="submit" className="w-full md:w-auto">
                          Submit Inquiry
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Inquiry;
