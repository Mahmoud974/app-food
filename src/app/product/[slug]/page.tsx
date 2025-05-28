// app/posts/[slug]/page.jsx

export default function Page({ params }) {
  return <p>Yes {params.slug}</p>;
}
