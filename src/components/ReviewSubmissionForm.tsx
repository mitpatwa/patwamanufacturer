import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';

interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  title: string;
  review: string;
  productPurchased: string;
}

const ReviewSubmissionForm = () => {
  const { toast } = useToast();
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState<ReviewFormData>({
    name: '',
    email: '',
    rating: 0,
    title: '',
    review: '',
    productPurchased: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating",
        variant: "destructive"
      });
      return;
    }

    // In production, this would send to your backend/Supabase
    console.log('Review submitted:', formData);
    
    toast({
      title: "Thank You!",
      description: "Your review has been submitted and will appear after approval.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      rating: 0,
      title: '',
      review: '',
      productPurchased: ''
    });
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-lg border border-border">
      <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
      <p className="text-muted-foreground mb-6">
        Your feedback helps us improve and helps others make informed decisions
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <Label>Your Rating *</Label>
          <div className="flex gap-2 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({ ...formData, rating: star })}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= (hoveredRating || formData.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="productPurchased">Product Purchased</Label>
          <Input
            id="productPurchased"
            value={formData.productPurchased}
            onChange={(e) => setFormData({ ...formData, productPurchased: e.target.value })}
            placeholder="e.g., Gold Bullion Tassel"
          />
        </div>

        <div>
          <Label htmlFor="title">Review Title *</Label>
          <Input
            id="title"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Sum up your experience"
          />
        </div>

        <div>
          <Label htmlFor="review">Your Review *</Label>
          <Textarea
            id="review"
            required
            value={formData.review}
            onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            placeholder="Tell us about your experience with our products and service..."
            rows={5}
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default ReviewSubmissionForm;
