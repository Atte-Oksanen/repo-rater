import { Formik } from "formik"
import { Text } from "react-native"
import ReviewForm from "./ReviewForm"
import { number, object, string } from "yup"
import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"
import { useNavigate } from "react-router-native"

const NewReview = () => {
  const navigate = useNavigate()
  const [mutate, result] = useMutation(CREATE_REVIEW)
  const validationSchema = object({
    ownerName: string().required(),
    rating: number().max(100).min(0),
    repositoryName: string().required(),
    text: string()
  })
  const submitForm = async values => {
    try {
      const res = await mutate({ variables: { review: { ...values, rating: Number(values.rating) } } })
      navigate(`/repository/${res.data.createReview.repositoryId}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Formik
      initialValues={{ ownerName: '', rating: '', repositoryName: '', text: '' }}
      onSubmit={values => submitForm(values)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default NewReview