import Button from "@/ui/Button";
import TextArea from "@/ui/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  text: z.string().nonempty("نظر نباید خالی باشد !"),
});

export type CommentFormDataType = z.infer<typeof validationSchema>;

function CommentForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CommentFormDataType>({ resolver: zodResolver(validationSchema) });

  const handleAddComment = (formData: CommentFormDataType) => {
    console.log(formData);
  };

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md w-full">
          <form className="space-y-7" onSubmit={handleSubmit(handleAddComment)}>
            <TextArea
              {...register("text")}
              errors={errors}
              placeholder="نظر خود را اینجا وارد کنید..."
            />
            <Button>ثبت نظر</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
