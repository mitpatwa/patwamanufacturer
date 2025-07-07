import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
  company: z.string().optional(),
  location: z.string().min(2, { message: "Please enter your location." }),
  projectType: z.string({ required_error: "Please select a project type." }),
  description: z.string().min(10, { message: "Please provide a brief description of your project." }),
  timeline: z.string({ required_error: "Please select a timeline." }),
  quantity: z.string().optional(),
  specialRequirements: z.string().optional(),
  referralSource: z.string().optional(),
  termsAccepted: z.boolean().refine(value => value === true, {
    message: "You must accept the terms and privacy policy.",
  }),
});

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUploads, setFileUploads] = useState<File[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      location: "",
      description: "",
      quantity: "",
      specialRequirements: "",
      referralSource: "",
      termsAccepted: false,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFileUploads(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFileUploads(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Custom Passementerie Inquiry - ${values.projectType}`);
    const body = encodeURIComponent(`
Dear Patwa Manufacturer Team,

I would like to inquire about custom passementerie services.

CONTACT INFORMATION:
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone || 'Not provided'}
Company: ${values.company || 'Not provided'}
Location: ${values.location}

PROJECT DETAILS:
Project Type: ${values.projectType}
Timeline: ${values.timeline}
Estimated Quantity: ${values.quantity || 'Not specified'}

Description:
${values.description}

Special Requirements:
${values.specialRequirements || 'None specified'}

How did you hear about us: ${values.referralSource || 'Not specified'}

${fileUploads.length > 0 ? `\nNote: ${fileUploads.length} file(s) attached separately` : ''}

Best regards,
${values.name}
    `);
    
    // Open email client
    window.location.href = `mailto:patwamanufacturers@gmail.com?subject=${subject}&body=${body}`;
    
    // Simulate form submission
    setTimeout(() => {
      console.log({ ...values, files: fileUploads });
      
      toast({
        title: "Inquiry Prepared",
        description: "Your email client should have opened with your inquiry. Please send the email to complete your request.",
      });
      
      // Reset form and state
      form.reset();
      setFileUploads([]);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
      <div className="mb-6 p-4 bg-sand-50 rounded-lg border border-sand-200">
        <p className="text-sm text-muted-foreground text-center">
          <strong>Direct Contact:</strong> For immediate assistance, email us directly at{" "}
          <a 
            href="mailto:patwamanufacturers@gmail.com" 
            className="text-primary hover:underline font-medium"
          >
            patwamanufacturers@gmail.com
          </a>
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-medium">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name*</FormLabel>
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
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email address" {...field} />
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
                    <FormLabel>Phone</FormLabel>
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
                      <Input placeholder="Your company or designer's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your city/country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-medium">Project Details</h2>
            
            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Type*</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="residential">Residential Interior</SelectItem>
                      <SelectItem value="commercial">Commercial Interior</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="fashion">Fashion Accessory</SelectItem>
                      <SelectItem value="furniture">Furniture/Upholstery</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description*</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please provide details about your project, including any specific design requirements or inspiration."
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timeline*</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (within 2 weeks)</SelectItem>
                        <SelectItem value="soon">Soon (2-4 weeks)</SelectItem>
                        <SelectItem value="flexible">Flexible (1-3 months)</SelectItem>
                        <SelectItem value="planning">Planning (3+ months)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Quantity</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 10 pieces, 20 meters, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="specialRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requirements</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any specific materials, colors, or other requirements for your project."
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-medium">Reference Materials</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Upload Images or Documents</label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center justify-center"
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <span className="text-muted-foreground">
                      Drag and drop files here or click to browse
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      Supports images and PDF files (max 10MB each)
                    </span>
                  </label>
                </div>
              </div>
              
              {fileUploads.length > 0 && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Uploaded Files</label>
                  <ul className="space-y-2">
                    {fileUploads.map((file, index) => (
                      <li 
                        key={index} 
                        className="flex items-center justify-between bg-secondary p-2 rounded-md"
                      >
                        <span className="text-sm truncate max-w-[80%]">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <FormField
              control={form.control}
              name="referralSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Referral from Designer/Architect</SelectItem>
                      <SelectItem value="magazine">Magazine/Publication</SelectItem>
                      <SelectItem value="exhibition">Trade Exhibition</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the <a href="/terms" className="text-primary underline">Terms of Service</a> and <a href="/privacy" className="text-primary underline">Privacy Policy</a>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 font-medium"
          >
            {isSubmitting ? "Preparing Email..." : "Send Inquiry via Email"}
          </button>
        </form>
      </Form>
    </div>
  );
};

export default InquiryForm;
