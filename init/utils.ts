import semver from 'semver'

export function semverVersionIsGreater(
  version: string,
  allowedVersionRange: string,
) {
  const minAvailableVersion = semver.minVersion(version)?.raw

  return Boolean(
    minAvailableVersion &&
      semver.satisfies(minAvailableVersion, allowedVersionRange),
  )
}
