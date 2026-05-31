type Params = {
  params: {
    slug: string;
  };
};

// ✅ Thêm hàm này
export async function generateStaticParams() {
  return [
    { slug: "bai-viet-1" },
    { slug: "bai-viet-2" },
  ];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}