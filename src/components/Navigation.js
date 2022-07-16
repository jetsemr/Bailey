/*
 * Description: Navigation bar component.
 * Date: 7-15-2022
 *
 */

export default function Navigation() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/home"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Bailey
        </a>
      </div>
      <div>
        <a
          href="/home"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Dashboard
        </a>
        <a
          href="/documentation"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Documentation
        </a>
        <a
          href="/Ticket"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Ticket
        </a>
      </div>
    </nav>
  );
}
