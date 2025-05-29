import { createComment } from "@/lib/actions";
import { Comment } from "@/types/Post";
import Button from "@/ui/Button";
import TextArea from "@/ui/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = {
  postId: string;
  parent: Comment | null;
  onClose: () => void;
};

const validationSchema = z.object({
  text: z.string().nonempty("نظر نباید خالی باشد !"),
});

export type CommentFormDataType = z.infer<typeof validationSchema>;

function CommentForm({ postId, parent, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormDataType>({ resolver: zodResolver(validationSchema) });

  const handleAddComment = async (formData: CommentFormDataType) => {
    const data = await createComment(formData, postId, parent);
    if (data?.errMsg) {
      toast.error(data.errMsg);
    } else {
      toast.success(data.message);
    }
    onClose();
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
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "درحال ایجاد نظر" : "ثبت نظر"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
