import { useRouter } from 'next/router';
import { ChevronDownIcon, CircleIcon, PlusIcon, StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

interface BlogCardProps {
  title: string;
  slug: string;
  description: string;
  tags: string;
  date: string;
}

export function BlogCard(props: BlogCardProps) {
  const { title, slug, description, tags, date } = props;
  const router = useRouter();
  return (
    <Card {...props}>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle onClick={() => router.push(`/blog/${slug}`)}>
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 md:space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            {tags}
          </div>
          <div>{date}</div>
        </div>
      </CardContent>
    </Card>
  );
}
