type Props = {
  error: string
}

function ErrorAlert({ error }: Props) {
  return (
    <div className="flex justify-center items-center bg-red-200 rounded-sm p-2">
      Error : {error}
    </div>
  )
}

export default ErrorAlert
