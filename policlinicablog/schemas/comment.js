export default {
  name: "comment",
  type: "document",
  title: "Comentários",
  fields: [
    { name: "name", type: "string" },
    {
      title: "Aprovado",
      name: "approved",
      type: "boolean",
      description: "Comentários não serão mostrados sem sua permisão",
    },
    { name: "email", type: "string" },
    { name: "comment", type: "text",title:"Comentário" },
    { name: "post", type: "reference", to: [{ type: "post" }] },
  ],
};
