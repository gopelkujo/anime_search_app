import { useParams, useNavigate } from "react-router-dom";
import { useGetAnimeDetailQuery } from "../api/apiSlices";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  }

  const {
    data: result,
    isFetching,
    isSuccess,
  } = useGetAnimeDetailQuery(id ?? "0");

  return (
    <div className="flex flex-col items-start">
      <Button variant="outline" className="mb-10" onClick={handleGoBack}>
        <ArrowLeft />
        <span>Back</span>
      </Button>

      {isFetching ? (
        <span>Loading...</span>
      ) : isSuccess ? (
        <>
          <img src={result.data.images.jpg.image_url} />
          <span>{result.data.title}</span>
          <span>{result.data.status}</span>
          <span>{result.data.synopsis}</span>
          <span>{result.data.rating}</span>
        </>
      ) : (
        <span>Error</span>
      )}
    </div>
  );
}
