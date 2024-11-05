import { getCollection } from "astro:content";
// import { createClient } from '@supabase/supabase-js'

// export async function getSupapost(){
//   let { data: supaposts } = await supabase
//   .from('real_posts')
//   .select('*')

//   const posts = (await supaposts).sort(
//     (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
//   );

//   return posts;
// }

// export async function getSupacategory(){
//   let { data: supacategories } = await supabase
//   .from('real_categories')
//   .select('*')

//   return await supacategories;
// }

// export async function createPost(data: any){

//   const { error } = await supabase
//   .from('real_posts')
//   .insert(data)

//   return;
// }

// export async function uploadImage(imageName: string, img: any){
//   const { data, error } = await supabase
//   .storage
//   .from('images')
//   .upload(`blog/${imageName}`, img, {
//     cacheControl: '3600',
//     upsert: false
//   })

//   return;
// }

export async function getCategories() {
  const posts = await getCollection("blog");
  const categories = [
    ...new Set(posts.map((post:any ) => post.data.category).flat()),
  ];

  return categories;
}

export async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

// export async function getHeader() {
//   const posts = (await getCollection("blog")).sort(
//     (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
//   );
//   const post = posts.at(0);

//   return post;
// }
export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("blog"))
    .filter((post: any) => post.data.category.includes(category))
    .sort((a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}
