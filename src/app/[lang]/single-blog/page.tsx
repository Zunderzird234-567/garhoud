
import SingleBlog from "@/components/single-blog";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function SingleBlogPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <SingleBlog dictionary={dictionary} lang={lang} />
  )
}
