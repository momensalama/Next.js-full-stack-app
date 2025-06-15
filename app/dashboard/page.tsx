import { getIssues } from '@/lib/dal'
import Link from 'next/link'
import Button from '../components/ui/Button'
import { PlusIcon } from 'lucide-react'
import Badge from '../components/ui/Badge'
import { formatRelativeTime } from '@/lib/utils'
import { Priority, Status } from '@/lib/types'
import { ISSUE_STATUS, ISSUE_PRIORITY } from '@/db/schema'

export default async function DashboardPage() {
  const issues = await getIssues()

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold">Issues</h1>
        <Link href="/issues/new">
          <Button>
            <span className="flex items-center">
              <PlusIcon size={18} className="mr-2" />
              New Issue
            </span>
          </Button>
        </Link>
      </div>

      {issues.length > 0 ? (
        <div className="overflow-x-auto">
          <div className="min-w-[800px] rounded-lg border border-gray-200 dark:border-dark-border-default bg-white dark:bg-dark-high shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-12 gap-4 px-4 sm:px-6 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-dark-elevated border-b border-gray-200 dark:border-dark-border-default">
              <div className="col-span-6 sm:col-span-5">Title</div>
              <div className="col-span-3 sm:col-span-2">Status</div>
              <div className="col-span-3 sm:col-span-2">Priority</div>
              <div className="hidden sm:block sm:col-span-3">Created</div>
            </div>

            {/* Issue rows */}
            <div className="divide-y divide-gray-200 dark:divide-dark-border-default">
              {issues.map((issue) => (
                <Link
                  key={issue.id}
                  href={`/issues/${issue.id}`}
                  className="block hover:bg-gray-50 dark:hover:bg-dark-elevated transition-colors"
                >
                  <div className="grid grid-cols-12 gap-4 px-4 sm:px-6 py-4 items-center">
                    <div className="col-span-6 sm:col-span-5 font-medium truncate">
                      {issue.title}
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <Badge status={issue.status as Status}>
                        {ISSUE_STATUS[issue.status as Status].label}
                      </Badge>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                      <Badge priority={issue.priority as Priority}>
                        {ISSUE_PRIORITY[issue.priority as Priority].label}
                      </Badge>
                    </div>
                    <div className="hidden sm:block sm:col-span-3 text-sm text-gray-500 dark:text-gray-400">
                      {formatRelativeTime(new Date(issue.createdAt))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center border border-gray-200 dark:border-dark-border-default rounded-lg bg-white dark:bg-dark-high p-4 sm:p-8">
          <h3 className="text-lg font-medium mb-2">No issues found</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Get started by creating your first issue.
          </p>
          <Link href="/issues/new">
            <Button>
              <span className="flex items-center">
                <PlusIcon size={18} className="mr-2" />
                Create Issue
              </span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
