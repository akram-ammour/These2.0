import SearchInput from "@/components/searchInput"

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-full flex flex-col space-y-5  max-w-7xl m-auto'>
      <SearchInput />
    </div>
  )
}

export default page