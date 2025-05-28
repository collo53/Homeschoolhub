import {
  FaSearch,
  FaShieldAlt,
  FaClock,
  FaUser,
  FaFileAlt,
} from  'react-icons/fa'
import { Import } from 'lucide-react'
import React from 'react'

const auditLogs = [
  {
    id: 1,
    action: "User Login",
    user: "Principal Smith",
    timestamp: "2024-11-15 14:30:25",
    details: "Successful login from IP 192.168.1.100",
    severity: "info",
  },
  {
    id: 2,
    action: "Student Record Modified",
    user: "Ms. Johnson",
    timestamp: "2024-11-15 13:45:12",
    details: "Updated grade for Alex Thompson in Mathematics",
    severity: "warning",
  },
  {
    id: 3,
    action: "Course Created",
    user: "Dr. Wilson",
    timestamp: "2024-11-15 12:20:08",
    details: "Created new course: Advanced Physics Lab",
    severity: "info",
  },
  {
    id: 4,
    action: "Failed Login Attempt",
    user: "Unknown",
    timestamp: "2024-11-15 11:15:33",
    details: "Failed login attempt for user 'admin' from IP 203.45.67.89",
    severity: "error",
  },
  {
    id: 5,
    action: "Report Generated",
    user: "Principal Smith",
    timestamp: "2024-11-15 10:30:44",
    details: "Generated monthly academic performance report",
    severity: "info",
  },
  {
    id: 6,
    action: "Permission Changed",
    user: "System Admin",
    timestamp: "2024-11-15 09:45:17",
    details: "Updated permissions for teacher role",
    severity: "warning",
  },
  {
    id: 7,
    action: "Data Export",
    user: "Principal Smith",
    timestamp: "2024-11-15 08:22:55",
    details: "Exported student enrollment data",
    severity: "info",
  },
  {
    id: 8,
    action: "System Backup",
    user: "System",
    timestamp: "2024-11-15 03:00:00",
    details: "Automated daily backup completed successfully",
    severity: "info",
  },
]

const getSeverityColor = (severity) => {
  switch (severity) {
    case 'error':
      return 'bg-red-100 text-red-800'
    case 'warning':
      return 'bg-yellow-100 text-yellow-800'
    case 'info':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getSeverityIcon = (severity) => {
  switch (severity) {
    case 'error':
      return '🚨'
    case 'warning':
      return '⚠️'
    case 'info':
      return 'ℹ️'
    default:
      return '📝'
  }
}

export default function AuditLogs() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Audit Logs</h1>
          <p className="text-slate-600 mt-1">Monitor system activities and security events</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
            <FaSearch className='mr-2'/>
          <input
            type="text"
            placeholder="Search logs..."
            className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white border rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center gap-2 text-lg font-semibold text-slate-900">
            <FaShieldAlt className='mr-2'/>
          System Activity Log
        </div>
        <div className="p-4 space-y-3">
          {auditLogs.map((log) => (
            <div key={log.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-lg">{getSeverityIcon(log.severity)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900">{log.action}</h3>
                      <span className={`${getSeverityColor(log.severity)} text-xs px-2 py-0.5 rounded`}>
                        {log.severity.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                      <div className="flex items-center gap-1">
                            <FaUser className='mr-2'/>
                        <span>{log.user}</span>
                      </div>
                      <div className="flex items-center gap-1">
                          <FaClock className='mr-2'/>
                        <span>{log.timestamp}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-700">{log.details}</p>
                  </div>
                </div>
                <div className="ml-4">
                  <FaFileAlt className='mr-2'/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
