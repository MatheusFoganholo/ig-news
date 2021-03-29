import { signIn, signOut, useSession } from "next-auth/client";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const [session] = useSession();
  console.log(session);

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="var(--green-150)" />
      {session.user.name}
      <FiX color="var(--gray-450)" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="var(--yellow-500)" />
      Sign in with GitHub
    </button>
  );
}
