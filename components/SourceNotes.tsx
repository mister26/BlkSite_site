export function SourceNotes() {
  return (
    <span
      hidden
      dangerouslySetInnerHTML={{
        __html: `
<!-- if you're reading this, you already know -->
<!-- BS-002 through BS-047 redacted from this page -->
<!-- yes the redactions are CSS. yes you can remove them. no there's nothing under them. -->
`,
      }}
    />
  );
}
