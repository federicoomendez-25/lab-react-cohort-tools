import { Link } from "react-router-dom";
import students from "../assets/students.json";

export default function HomePage() {
  return (
    <div className="page home p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Home Page</h1>

      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b">Image</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Program</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Phone</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr
              key={student._id}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-4 py-2 border-b">
                <Link to={`/students/${student._id}`}>
                  <img
                    src={student.image}
                    alt={student.firstName}
                    className="h-10 w-10 rounded-full"
                  />
                </Link>
              </td>
              <td className="px-4 py-2 border-b">
                <Link
                  to={`/students/${student._id}`}
                  className="text-blue-600 hover:underline"
                >
                  {student.firstName} {student.lastName}
                </Link>
              </td>
              <td className="px-4 py-2 border-b">{student.program}</td>
              <td className="px-4 py-2 border-b">{student.email}</td>
              <td className="px-4 py-2 border-b">{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
