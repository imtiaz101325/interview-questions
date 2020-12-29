// Components
import SensitiveUI from './SensitiveUI'

// HOC
// import withAuth from './withAuth'

const ProtectedUI = SensitiveUI //Wrap this with the HOC e.g. withAuth(SensitiveUI)

export default function AnswerThree() {
  return <div>
    <ProtectedUI />
  </div>
}